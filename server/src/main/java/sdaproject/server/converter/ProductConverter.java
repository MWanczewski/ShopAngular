package sdaproject.server.converter;

import org.springframework.stereotype.Component;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;

@Component
public class ProductConverter implements Converter<ProductEntity, ProductDTO>{
    private final ProductCategoryConverter productCategoryConverter = new ProductCategoryConverter();
    @Override
    public ProductEntity convertToEntity(ProductDTO dto) {
        ProductEntity entity = new ProductEntity();
        entity.setId(dto.getId());
        entity.setName(dto.getName());
        entity.setCategory(productCategoryConverter.convertToEntity(dto.getCategory()));
        entity.setDescription(dto.getDescription());
        return entity;
    }

    @Override
    public ProductDTO convertToDto(ProductEntity entity) {
        ProductDTO dto = new ProductDTO();
        dto.setId(entity.getId());
        dto.setName(entity.getName());
        dto.setDescription(entity.getDescription());
        dto.setCategory(productCategoryConverter.convertToDto(entity.getCategory()));
        return dto;
    }
}