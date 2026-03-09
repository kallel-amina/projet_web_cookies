package com.sweetbites.backend.dto.admin;

import com.sweetbites.backend.model.DeliveryStatus;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DeliveryStatusUpdateRequest {
    @NotNull
    private DeliveryStatus status;
}
