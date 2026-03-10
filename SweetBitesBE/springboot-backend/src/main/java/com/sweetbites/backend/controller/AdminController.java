package com.sweetbites.backend.controller;

import com.sweetbites.backend.dto.admin.DeliveryStatusUpdateRequest;
import com.sweetbites.backend.dto.admin.ProductRequest;
import com.sweetbites.backend.model.Delivery;
import com.sweetbites.backend.model.DeliveryStatus;
import com.sweetbites.backend.model.Product;
import com.sweetbites.backend.repository.DeliveryRepository;
import com.sweetbites.backend.repository.ProductRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.Instant;
import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final ProductRepository productRepository;
    private final DeliveryRepository deliveryRepository;

    @PostMapping("/products")
    public ResponseEntity<Product> createProduct(@Valid @RequestBody ProductRequest request) {
        Product product = Product.builder()
                .name(request.getName())
                .description(request.getDescription())
                .price(request.getPrice())
                .stock(request.getStock())
                .active(request.getActive())
            .category(request.getCategory())
            .imageUrl(request.getImageUrl())
            .imageAlt(request.getImageAlt())
                .build();

        Product saved = productRepository.save(product);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id, @Valid @RequestBody ProductRequest request) {
        Product existing = productRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found"));

        existing.setName(request.getName());
        existing.setDescription(request.getDescription());
        existing.setPrice(request.getPrice());
        existing.setStock(request.getStock());
        existing.setActive(request.getActive());
        existing.setCategory(request.getCategory());
        existing.setImageUrl(request.getImageUrl());
        existing.setImageAlt(request.getImageAlt());

        return ResponseEntity.ok(productRepository.save(existing));
    }

    @GetMapping("/products")
    public ResponseEntity<List<Product>> getProducts() {
        return ResponseEntity.ok(productRepository.findAll());
    }

    @DeleteMapping("/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable String id) {
        if (!productRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found");
        }
        productRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/deliveries")
    public ResponseEntity<List<Delivery>> getDeliveries(@RequestParam(required = false) DeliveryStatus status) {
        if (status != null) {
            return ResponseEntity.ok(deliveryRepository.findByStatus(status));
        }
        return ResponseEntity.ok(deliveryRepository.findAll());
    }

    @PatchMapping("/deliveries/{id}/status")
    public ResponseEntity<Delivery> updateDeliveryStatus(@PathVariable String id,
                                                         @Valid @RequestBody DeliveryStatusUpdateRequest request) {
        Delivery delivery = deliveryRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Delivery not found"));

        delivery.setStatus(request.getStatus());
        delivery.setUpdatedAt(Instant.now());

        return ResponseEntity.ok(deliveryRepository.save(delivery));
    }

    @PostMapping("/deliveries")
    public ResponseEntity<Delivery> createDelivery(@RequestParam Long orderId) {
        Delivery delivery = Delivery.builder()
                .orderId(orderId)
                .status(DeliveryStatus.PENDING)
                .updatedAt(Instant.now())
                .build();

        return ResponseEntity.status(HttpStatus.CREATED).body(deliveryRepository.save(delivery));
    }
}
