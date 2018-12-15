package sdaproject.server.entity;

import javax.persistence.*;

@Entity
@Table(name = "basket")
public class BasketEntity extends AbstractEntity {
    @ManyToOne
    @JoinColumn(name = "id_product")
    private ProductEntity product;
    @Column
    private Integer quantity;

    public ProductEntity getProduct() {
        return product;
    }

    public void setProduct(ProductEntity product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}
