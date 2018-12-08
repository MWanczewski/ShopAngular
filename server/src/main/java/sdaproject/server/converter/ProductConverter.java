package sdaproject.server.converter;

import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;

import java.util.List;

public class ProductConverter implements Converter<ProductEntity, ProductDTO>{
    @Override
    public ProductEntity convertToEntity(ProductDTO dto) {
        ProductEntity entity = new ProductEntity();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setCategory(dto.getProductCategoryEntity());
        entity.setPrice(dto.getPrice());
        entity.setDescription(dto.getDescription());
        return entity;
    }

    @Override
    public ProductDTO convertToDto(ProductEntity entity) {
        ProductDTO dto = new ProductDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setPrice(entity.getPrice());
        dto.setProductCategoryEntity(entity.getCategory());
        return dto;
    }
}