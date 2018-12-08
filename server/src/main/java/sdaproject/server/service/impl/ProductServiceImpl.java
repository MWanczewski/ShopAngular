package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.ProductConverter;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.repository.ProductRepository;
import sdaproject.server.service.ProductCategoryService;
import sdaproject.server.service.ProductService;


public class ProductServiceImpl extends AbstractServiceImpl<ProductEntity, ProductDTO> implements ProductService {

    private final ProductRepository productRepository;
    private final ProductConverter productConverter;

    public ProductServiceImpl(ProductRepository productRepository, ProductConverter productConverter) {
        this.productRepository = productRepository;
        this.productConverter = productConverter;
    }

    @Override
    protected JpaRepository<ProductEntity, Long> getRepo() {
        return productRepository;
    }

    @Override
    protected Converter<ProductEntity, ProductDTO> getConverter() {
        return productConverter;
    }
}
