package com.sweetbites.backend.controller;

import com.sweetbites.backend.dto.contact.ContactRequest;
import com.sweetbites.backend.service.ContactMailService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/contact")
@RequiredArgsConstructor
public class ContactController {

    private final ContactMailService contactMailService;

    @PostMapping
    public ResponseEntity<Map<String, Object>> sendMessage(@Valid @RequestBody ContactRequest request) {
        contactMailService.sendContactMessage(request);
        return ResponseEntity.ok(Map.of("success", true));
    }
}
