package com.scb.bank.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.scb.bank.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {
    // You can add custom query methods here if needed
}

