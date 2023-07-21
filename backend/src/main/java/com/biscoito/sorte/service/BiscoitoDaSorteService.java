package com.biscoito.sorte.service;

import com.biscoito.sorte.entity.BiscoitoDaSorte;
import com.biscoito.sorte.repository.BiscoitoDaSorteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BiscoitoDaSorteService {

    @Autowired
    private BiscoitoDaSorteRepository biscoitoDaSorteRepository;

    public List<BiscoitoDaSorte> getBiscoitoDaSorte() {
        return biscoitoDaSorteRepository.findAll();
    }

    public BiscoitoDaSorte saveBiscoitoDaSorte(BiscoitoDaSorte biscoitoDaSorte) {
        return biscoitoDaSorteRepository.save(biscoitoDaSorte);
    }

    public Optional<BiscoitoDaSorte> getBiscoitoDaSorteById(Long id) {
        return (biscoitoDaSorteRepository.findById(id));
    }

    public BiscoitoDaSorte editBiscoitoDaSorte(Long id, BiscoitoDaSorte biscoitoDaSorte) {
        Optional<BiscoitoDaSorte> biscoitoDaSorteById = getBiscoitoDaSorteById(id);

        biscoitoDaSorteById.ifPresent(daSorte -> daSorte.setFrase(biscoitoDaSorte.getFrase()));

        return biscoitoDaSorteRepository.save(biscoitoDaSorte);
    }

    public String deleteBiscoitoDaSorte(Long id) {
        Optional<BiscoitoDaSorte> biscoitoDaSorteById = getBiscoitoDaSorteById(id);

        if (biscoitoDaSorteById.isPresent()) {
            biscoitoDaSorteRepository.deleteById(id);

            return "Deletado com sucesso";
        }

        return "Item não encontrado";
    }
}
