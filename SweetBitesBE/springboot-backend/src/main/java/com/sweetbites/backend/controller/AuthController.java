package com.sweetbites.backend.controller;

import com.sweetbites.backend.dto.auth.AuthResponse;
import com.sweetbites.backend.dto.auth.LoginRequest;
import com.sweetbites.backend.dto.auth.RegisterRequest;
import com.sweetbites.backend.model.Role;
import com.sweetbites.backend.model.User;
import com.sweetbites.backend.repository.UserRepository;
import com.sweetbites.backend.security.JwtService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtService jwtService;

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        if (userRepository.existsByEmail(request.getEmail())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exists");
        }

        User user = User.builder()
                .fullName(request.getFullName())
                .email(request.getEmail())
                .phone(request.getPhone())
                .address(request.getAddress())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(Role.ROLE_USER)
                .build();

        User saved = userRepository.save(user);
        String token = jwtService.generateToken(saved, saved.getRole().name());

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(new AuthResponse(
                        token, 
                        saved.getEmail(), 
                        saved.getFullName(), 
                        saved.getRole().name(),
                        saved.getPhone(),
                        saved.getAddress()
                ));
    }

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@Valid @RequestBody LoginRequest request) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword())
            );
        } catch (BadCredentialsException ex) {
            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Invalid email or password");
        }

        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));

        String token = jwtService.generateToken(user, user.getRole().name());
        return ResponseEntity.ok(new AuthResponse(
                token, 
                user.getEmail(), 
                user.getFullName(), 
                user.getRole().name(),
                user.getPhone(),
                user.getAddress()
        ));
    }

    @GetMapping("/me")
    public ResponseEntity<?> getCurrentUser(@RequestHeader("Authorization") String authHeader) {
        System.out.println("DEBUG: Received /me request with header: " + (authHeader != null ? "present" : "absent"));
        try {
            if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                System.out.println("DEBUG: Invalid or missing Bearer token");
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid token format");
            }
            String token = authHeader.substring(7);
            String email = jwtService.extractUsername(token);
            System.out.println("DEBUG: Extracted email: " + email);
            User user = userRepository.findByEmail(email)
                    .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "User not found"));
            System.out.println("DEBUG: User found: " + user.getEmail());
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            System.out.println("DEBUG: Error in /me endpoint: " + e.getMessage());
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }
}
