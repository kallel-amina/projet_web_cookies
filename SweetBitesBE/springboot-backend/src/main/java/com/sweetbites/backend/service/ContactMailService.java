package com.sweetbites.backend.service;

import com.sweetbites.backend.dto.contact.ContactRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
@RequiredArgsConstructor
public class ContactMailService {

    private final JavaMailSender mailSender;

    @Value("${spring.mail.username:}")
    private String fromEmail;

    @Value("${app.contact.to-email:}")
    private String toEmail;

    public void sendContactMessage(ContactRequest request) {
        if (toEmail == null || toEmail.isBlank()) {
            throw new ResponseStatusException(BAD_REQUEST, "CONTACT_TO_EMAIL is not configured");
        }

        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom((fromEmail == null || fromEmail.isBlank()) ? request.getEmail() : fromEmail);
        message.setTo(toEmail);
        message.setSubject("SweetBites Contact - " + request.getType());
        message.setText(buildBody(request));

        mailSender.send(message);
    }

    private String buildBody(ContactRequest request) {
        return "Name: " + request.getName() + "\n"
                + "Email: " + request.getEmail() + "\n"
                + "Type: " + request.getType() + "\n\n"
                + "Message:\n"
                + request.getMessage();
    }
}
