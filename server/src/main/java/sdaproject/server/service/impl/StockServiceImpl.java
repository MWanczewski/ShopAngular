package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.Converter;
import sdaproject.server.converter.StockConverter;
import sdaproject.server.dto.StockDTO;
import sdaproject.server.entity.StockEntity;
import sdaproject.server.repository.StockRepository;
import sdaproject.server.service.StockService;

@Service
public class StockServiceImpl extends AbstractServiceImpl<StockEntity, StockDTO> implements StockService {
    private final StockRepository stockRepository;
    private final StockConverter stockConverter;

    public StockServiceImpl(StockRepository stockRepository, StockConverter stockConverter) {
        this.stockRepository = stockRepository;
        this.stockConverter = stockConverter;
    }

    @Override
    protected JpaRepository<StockEntity, Long> getRepo() {
        return this.stockRepository;
    }

    @Override
    protected Converter<StockEntity, StockDTO> getConverter() {
        return this.stockConverter;
    }
}
