package sdaproject.server.dto;

import sdaproject.server.entity.ProductCategoryEntity;


public class ProductDTO extends AbstractDTO{
    private String name;
    private ProductCategoryDTO category;
    private String description;

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public ProductCategoryDTO getCategory() {
        return category;
    }

    public void setCategory(ProductCategoryDTO category) {
        this.category = category;
    }
}
