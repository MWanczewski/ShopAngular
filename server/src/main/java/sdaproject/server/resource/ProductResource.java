package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.ProductDTO;
import sdaproject.server.entity.ProductEntity;
import sdaproject.server.service.AbstractService;
import sdaproject.server.service.ProductService;



@RestController
@RequestMapping("/api/products")
public class ProductResource
        extends AbstractResource<ProductEntity, ProductDTO> {
   private final ProductService productService;
   private final Logger log  = LoggerFactory.getLogger(ProductResource.class);

    public ProductResource(ProductService productService) {
        this.productService = productService;
}
    @Override
    public AbstractService<ProductEntity, ProductDTO> getService() {

        return productService;
    }
}
