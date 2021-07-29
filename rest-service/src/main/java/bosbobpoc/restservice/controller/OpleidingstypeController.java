package bosbobpoc.restservice.controller;

import bosbobpoc.restservice.entity.Opleidingstype;
import bosbobpoc.restservice.service.OpleidingstypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class OpleidingstypeController {

    @Autowired
    private OpleidingstypeService service;

    @GetMapping("/rest")
    public List<Opleidingstype> findAllOpleidingstypes(){
        return service.getOpleidingstype();
    }

    @GetMapping("/getOpleidingstype/{id}")
    public Opleidingstype findOpleidingstypeById(@PathVariable int id) {
        return service.getOpleidingstypeById(id);
    }

    @PostMapping("/saveOpleidingstype")
    public Opleidingstype saveOpleidingstype(@RequestBody Opleidingstype opleidingstype) {
        return service.saveOpleidingstype(opleidingstype);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteOpleidingstype(@PathVariable int id) {
        return service.deleteOpleidingstype(id);
    }

    @PutMapping("/update")
    public Opleidingstype updateProduct(@RequestBody Opleidingstype product) {
        return service.updateOpleidingstype(product);
    }


}
