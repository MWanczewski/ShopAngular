package sdaproject.server.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "basket")
public class Basket extends AbstractEntity {
    @Column
    private Integer id_product;
    @Column
    private Integer quantity;
//    @Column
//    private PurchaseEntity order;

    public Integer getId_product() {
        return id_product;
    }

    public void setProductEntity(Integer id_product) {
        this.id_product= id_product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
//
//    public PurchaseEntity getOrder() {
//        return order;
//    }
//
//    public void setOrder(PurchaseEntity order) {
//        this.order = order;
//    }
}
