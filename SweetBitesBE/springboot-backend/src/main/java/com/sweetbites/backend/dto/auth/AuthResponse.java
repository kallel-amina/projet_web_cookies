package com.sweetbites.backend.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String email;
    private String fullName;
    private String role;
    private String phone;
    private String address;
}
