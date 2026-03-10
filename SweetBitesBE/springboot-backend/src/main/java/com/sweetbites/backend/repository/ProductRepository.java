package com.sweetbites.backend.repository;

import com.sweetbites.backend.model.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ProductRepository extends MongoRepository<Product, String> {
	List<Product> findByActiveTrue();
	boolean existsByName(String name);
}
