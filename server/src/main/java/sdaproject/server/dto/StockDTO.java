package sdaproject.server.dto;

import sdaproject.server.entity.ProductEntity;

import java.math.BigDecimal;

public class StockDTO extends AbstractDTO{
    private ProductEntity product;
    private Integer quantity;
    private BigDecimal price;



    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}

