package ufes.marktiabackend.dtos.requests;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SchedulingRequestDTO {
    private String serviceId;

    private String consumerId;
}
