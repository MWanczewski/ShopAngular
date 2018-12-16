package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import sdaproject.server.dto.AbstractDTO;
import sdaproject.server.entity.AbstractEntity;
import sdaproject.server.service.AbstractService;

import java.util.Collection;

public abstract class AbstractResource<ENTITY extends AbstractEntity, DTO extends AbstractDTO> {

    private static final Logger log = LoggerFactory.getLogger(AbstractResource.class);

    public abstract AbstractService<ENTITY, DTO> getBasketService();

    @GetMapping("/open/{id}")
    public DTO getById(@PathVariable("id") Long id) {
        return getBasketService().findById(id);
    }

    @GetMapping("/open")
    public Collection<DTO> getAll() {
        return getBasketService().getAll();
    }

    @PostMapping
    public DTO create(@RequestBody DTO dto) {
        return getBasketService().save(dto);
    }

    @PutMapping("/{id}")
    public DTO update(@RequestBody DTO dto) {
        return getBasketService().update(dto);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Long id) throws Exception {
        getBasketService().delete(id);
    }

}
