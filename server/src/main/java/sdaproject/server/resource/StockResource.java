package sdaproject.server.resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sdaproject.server.dto.StockDTO;
import sdaproject.server.entity.StockEntity;
import sdaproject.server.service.AbstractService;
import sdaproject.server.service.StockService;



@RestController
@RequestMapping("/api/stocks")
public class StockResource extends AbstractResource<StockEntity, StockDTO> {
    private final StockService stockService;
    private final Logger log = LoggerFactory.getLogger(StockResource.class);

    public StockResource(StockService stockService) {
        this.stockService = stockService;
    }

    @Override
    public AbstractService<StockEntity, StockDTO> getBasketService() {
        return stockService;
    }
}
