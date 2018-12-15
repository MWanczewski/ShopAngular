package sdaproject.server.service.impl;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;
import sdaproject.server.converter.BasketConverter;
import sdaproject.server.converter.Converter;
import sdaproject.server.dto.BasketDTO;
import sdaproject.server.entity.BasketEntity;
import sdaproject.server.repository.BasketRepository;
import sdaproject.server.service.BasketService;

@Service
public class BasketServiceImpl
        extends AbstractServiceImpl<BasketEntity, BasketDTO>
        implements BasketService {

    private final BasketRepository repository;
    private final BasketConverter converter;

    public BasketServiceImpl(BasketRepository repository, BasketConverter converter) {
        this.repository = repository;
        this.converter  = converter;
    }

    @Override
    protected JpaRepository<BasketEntity, Long> getRepo() {
        return this.repository;
    }

    @Override
    protected Converter<BasketEntity, BasketDTO> getConverter() {
        return this.converter;
    }
}
