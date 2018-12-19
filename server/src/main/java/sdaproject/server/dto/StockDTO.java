package sdaproject.server.dto;

import sdaproject.server.entity.ProductEntity;

import java.math.BigDecimal;

public class StockDTO extends AbstractDTO{

    private Integer quantity;
    private ProductDTO product;
    private BigDecimal price;




    public int getQuantity() {
        return quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductDTO getProduct() {
        return product;
    }

    public void setProduct(ProductDTO product) {
        this.product = product;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}

