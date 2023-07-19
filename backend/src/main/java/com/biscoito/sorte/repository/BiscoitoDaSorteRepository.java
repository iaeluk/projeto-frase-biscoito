package com.biscoito.sorte.repository;

import com.biscoito.sorte.entity.BiscoitoDaSorte;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BiscoitoDaSorteRepository extends JpaRepository<BiscoitoDaSorte, Long> {
}
