package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import sdaproject.server.entity.ProductEntity;

public interface ProductRepository extends JpaRepository<ProductEntity,  Long> {
}
