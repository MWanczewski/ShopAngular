package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sdaproject.server.entity.ProductCategoryEntity;
import sdaproject.server.entity.StockEntity;

@Repository
public interface StockRepository extends JpaRepository<StockEntity, Long> {
}
