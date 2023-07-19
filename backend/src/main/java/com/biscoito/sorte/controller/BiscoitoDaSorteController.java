package com.biscoito.sorte.controller;

import com.biscoito.sorte.entity.BiscoitoDaSorte;
import com.biscoito.sorte.service.BiscoitoDaSorteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class BiscoitoDaSorteController {

    @Autowired
    private BiscoitoDaSorteService biscoitoDaSorteService;

    @GetMapping
    public ResponseEntity<List<BiscoitoDaSorte>> getBiscoitoDaSorte() {
        List<BiscoitoDaSorte> biscoitoDaSorteList = biscoitoDaSorteService.getBiscoitoDaSorte();

        return ResponseEntity.status(HttpStatus.OK).body(biscoitoDaSorteList);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<BiscoitoDaSorte>> getBiscoitoDaSorteById(@PathVariable Long id) {
        Optional<BiscoitoDaSorte> biscoitoDaSorte = biscoitoDaSorteService.getBiscoitoDaSorteById(id);

        return ResponseEntity.status(HttpStatus.OK).body(biscoitoDaSorte);
    }

    @PostMapping
    public ResponseEntity<BiscoitoDaSorte> saveBiscoitoDaSorte(@Valid @RequestBody BiscoitoDaSorte biscoitoDaSorte) {
        BiscoitoDaSorte savedbiscoitoDaSorte = biscoitoDaSorteService.saveBiscoitoDaSorte(biscoitoDaSorte);

        return ResponseEntity.status(HttpStatus.CREATED).body(savedbiscoitoDaSorte);
    }

    @PutMapping("/{id}")
    public ResponseEntity<BiscoitoDaSorte> editBiscoitoDaSorte(@PathVariable Long id, @Valid @RequestBody BiscoitoDaSorte biscoitoDaSorte) {
        BiscoitoDaSorte editedBiscoitoDaSorte = biscoitoDaSorteService.editBiscoitoDaSorte(id, biscoitoDaSorte);

        return ResponseEntity.status(HttpStatus.OK).body(editedBiscoitoDaSorte);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBiscoitoDaSorte(@PathVariable Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(biscoitoDaSorteService.deleteBiscoitoDaSorte(id));
    }
}
