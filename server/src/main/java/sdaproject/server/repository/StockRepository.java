package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sdaproject.server.entity.ProductCategoryEntity;
import sdaproject.server.entity.StockEntity;

public interface StockRepository extends JpaRepository<StockEntity, Long> {
}
