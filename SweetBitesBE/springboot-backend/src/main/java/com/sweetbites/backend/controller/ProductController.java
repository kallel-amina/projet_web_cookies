package com.sweetbites.backend.controller;

import com.sweetbites.backend.model.Product;
import com.sweetbites.backend.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductRepository productRepository;

    @GetMapping
    public ResponseEntity<List<Product>> getActiveProducts() {
        return ResponseEntity.ok(productRepository.findByActiveTrue());
    }
}
