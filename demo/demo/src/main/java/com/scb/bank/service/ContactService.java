package com.scb.bank.service;

import java.util.List;
import com.scb.bank.entities.Contact;

public interface ContactService {
    Contact createContact(Contact contact);
    List<Contact> getAllContacts();
}
