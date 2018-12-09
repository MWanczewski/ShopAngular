package sdaproject.server.dto;

import sdaproject.server.entity.ProductCategoryEntity;

import java.math.BigDecimal;

public class DictionaryDTO extends AbstractDTO {

    private String name;

    public DictionaryDTO() {}

    public DictionaryDTO(Long id) {
        super.setId(id);
    }

    public DictionaryDTO(Long id, String name) {
        super.setId(id);
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
