package com.devsuperior.dsvendas.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.devsuperior.dsvendas.DTO.SaleSuccessDTO;
import com.devsuperior.dsvendas.DTO.SaleSumDTO;
import com.devsuperior.dsvendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{

	/*Usando JPQL*/
	@Query("Select new com.devsuperior.dsvendas.DTO.SaleSumDTO(obj.seller, SUM(obj.amount)) "
			+ "From Sale as obj Group by obj.seller")
	List<SaleSumDTO> amountGroupedBySeller();
	
	
	@Query("Select new com.devsuperior.dsvendas.DTO.SaleSuccessDTO(obj.seller, SUM(obj.visited), sum(obj.deals)) "
			+ "From Sale as obj Group by obj.seller")
	List<SaleSuccessDTO> successGroupedBySeller();
	
	
}
