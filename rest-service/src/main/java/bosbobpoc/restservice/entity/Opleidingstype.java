package bosbobpoc.restservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "OPLEIDINGSTYPE", catalog = "pbos01")
@TableGenerator(name = "OPLEIDINGSTYPE_GENERATOR", table = "SEQUENCE", pkColumnName = "SEQ_NAME", valueColumnName = "SEQ_COUNT", pkColumnValue = "OPLEIDINGSTYPE_ID", allocationSize = 10, catalog = "pbos01")
@Entity
public class Opleidingstype {

	private static final long serialVersionUID = 1L;
	@Id
    @GeneratedValue(strategy = GenerationType.TABLE, generator = "OPLEIDINGSTYPE_GENERATOR")
	private int id;
	private String kostenplaats;
	private String grootboek;
	private String omschrijving;

	public int getId() {
		return id;
	}

	public String getGrootboek() {
		return grootboek;
	}

	public String getKostenplaats() {
		return kostenplaats;
	}

	public String getOmschrijving() {
		return omschrijving;
	}

	public void setGrootboek(String grootboek) {
		this.grootboek = grootboek;
	}

	public void setKostenplaats(String kostenplaats) {
		this.kostenplaats = kostenplaats;
	}

	public void setOmschrijving(String omschrijving) {
		this.omschrijving = omschrijving;
	}


}