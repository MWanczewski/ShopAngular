package sdaproject.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import sdaproject.server.entity.BasketEntity;

@Repository
public interface BasketRepository extends JpaRepository<BasketEntity, Long> {
}
