package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.BasketDTO;
import sdaproject.server.entity.BasketEntity;
import sdaproject.server.service.AbstractService;
import sdaproject.server.service.BasketService;

@RestController
@RequestMapping("/api/baskets")
public class BasketResource extends AbstractResource<BasketEntity, BasketDTO> {
    private final BasketService basketService;
    private final Logger log = LoggerFactory.getLogger(BasketResource.class);

    public BasketResource(BasketService service) {
        this.basketService = service;
    }

    @Override
    public AbstractService<BasketEntity, BasketDTO> getService() {
        return basketService;
    }
}
