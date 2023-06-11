package ufes.marktiabackend.dtos.requests.auth;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RegisterRequestDTO {
    private Integer userRole;

    private String name;

    private String email;

    private String password;

    private String cpf;

    private String cnpj;

    private String telephone;

    /**
     * [TODO]
     * Ver como será questão do endereço
     */
    private String addressId;

    private String imageURL;
}
