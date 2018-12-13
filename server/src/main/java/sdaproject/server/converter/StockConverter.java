package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.StockDTO;
import sdaproject.server.entity.StockEntity;

@Component
public class StockConverter implements Converter<StockEntity, StockDTO> {
    @Override
    public StockEntity convertToEntity(StockDTO dto) {
        StockEntity entity = new StockEntity();

        entity.setId(dto.getId());
        entity.setProduct(dto.getProduct());
        entity.setQuantity(dto.getQuantity());
        entity.setPrice(dto.getPrice());

        return entity;
    }

    @Override
    public StockDTO convertToDto(StockEntity entity) {
        StockDTO dto = new StockDTO();

        dto.setId(entity.getId());
        dto.setProduct(entity.getProduct());
        dto.setPrice(entity.getPrice());
        dto.setQuantity(entity.getQuantity());

        return dto;
    }
}
