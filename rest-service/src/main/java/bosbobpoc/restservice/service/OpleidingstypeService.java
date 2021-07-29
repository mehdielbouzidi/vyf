package bosbobpoc.restservice.service;

import bosbobpoc.restservice.entity.Opleidingstype;
import bosbobpoc.restservice.repository.OpleidingstypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OpleidingstypeService {
    @Autowired
    private OpleidingstypeRepository repository;

    public Opleidingstype saveOpleidingstype(Opleidingstype opleidingstype) {
        return repository.save(opleidingstype);
    }

    public Opleidingstype getOpleidingstypeById(int id) {
        return repository.findById(id).orElse(null);
    }

    public List<Opleidingstype> getOpleidingstype() {
        return repository.findAll();
    }

    public String deleteOpleidingstype(int id) {
        repository.deleteById(id);
        return "Opleidingstype removed " + id;
    }

    public Opleidingstype updateOpleidingstype(Opleidingstype opleidingstype) {
        Opleidingstype existingType = repository.findById(opleidingstype.getId()).orElse(null);
        existingType.setGrootboek(opleidingstype.getGrootboek());
        existingType.setKostenplaats(opleidingstype.getKostenplaats());
        existingType.setOmschrijving(opleidingstype.getOmschrijving());
        return repository.save(existingType);
    }

}
