package sdaproject.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "basket")
public class Basket extends AbstractEntity {
    @Column
    private ProductEntity productEntity;
    @Column
    private Integer quantity;
    @Column
    private PurchaseEntity order;

    public ProductEntity getProductEntity() {
        return productEntity;
    }

    public void setProductEntity(ProductEntity productEntity) {
        this.productEntity = productEntity;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public PurchaseEntity getOrder() {
        return order;
    }

    public void setOrder(PurchaseEntity order) {
        this.order = order;
    }
}
