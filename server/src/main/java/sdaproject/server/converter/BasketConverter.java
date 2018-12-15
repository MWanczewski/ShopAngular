package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.BasketDTO;
import sdaproject.server.entity.BasketEntity;

@Component
public class BasketConverter implements Converter<BasketEntity, BasketDTO> {
    @Override
    public BasketEntity convertToEntity(BasketDTO dto) {
        BasketEntity entity = new BasketEntity();
        entity.setId(dto.getId());
        entity.setProduct(dto.getProduct());
        entity.setQuantity(dto.getQuantity());

        return entity;
    }

    @Override
    public BasketDTO convertToDto(BasketEntity entity) {
        BasketDTO dto = new BasketDTO();
        dto.setId(entity.getId());
        dto.setProduct(entity.getProduct());
        dto.setQuantity(entity.getQuantity());

        return dto;
    }
}
