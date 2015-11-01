package com.redcrescentgroup.helloworld.repository;

import com.redcrescentgroup.helloworld.domain.Book;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Book entity.
 */
public interface BookRepository extends JpaRepository<Book,Long> {

}
