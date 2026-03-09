package com.sweetbites.backend.repository;

import com.sweetbites.backend.model.Delivery;
import com.sweetbites.backend.model.DeliveryStatus;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface DeliveryRepository extends MongoRepository<Delivery, String> {
    List<Delivery> findByStatus(DeliveryStatus status);
}
