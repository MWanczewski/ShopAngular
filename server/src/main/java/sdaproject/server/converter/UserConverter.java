package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.UserDTO;
import sdaproject.server.entity.RoleEntity;
import sdaproject.server.entity.UserEntity;

import java.util.stream.Collectors;

@Component
public class UserConverter implements Converter<UserEntity, UserDTO> {
    @Override
    public UserEntity convertToEntity(UserDTO dto) {
        throw new UnsupportedOperationException();
    }

    @Override
    public UserDTO convertToDto(UserEntity entity) {
        UserDTO dto = new UserDTO();

        dto.setId(entity.getId());
        dto.setFirstName(entity.getName());
        dto.setSecondName(entity.getSecondName());
        dto.setEmail(entity.getEmail());
        dto.setCity(entity.getCity());
        dto.setCountry(entity.getCountry());
        dto.setPostalCode(entity.getPostalCode());
        dto.setPhoneNumber(entity.getPhoneNumber());
        dto.setRoles(entity.getRoles().stream().map(RoleEntity::getRoleName).collect(Collectors.toList()));
        return dto;
    }
}
