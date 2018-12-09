package sdaproject.server.entity;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "product")
public class ProductEntity extends AbstractEntity{
    @Column
    private String name;
    @Column
    private String description;
    @ManyToOne
    @JoinColumn(name = "id_category")
    ProductCategoryEntity category;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public ProductCategoryEntity getCategory() {
        return category;
    }

    public void setCategory(ProductCategoryEntity category) {
        this.category = category;
    }
}
