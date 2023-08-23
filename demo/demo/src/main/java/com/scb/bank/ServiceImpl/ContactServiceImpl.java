package com.scb.bank.ServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.scb.bank.entities.Contact;
import com.scb.bank.exception.ContactException;
import com.scb.bank.repository.ContactRepository;
import com.scb.bank.service.ContactService;

import java.util.List;

@Service
public class ContactServiceImpl implements ContactService {
    private final ContactRepository contactRepository;

    @Autowired
    public ContactServiceImpl(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    @Override
    public Contact createContact(Contact contact) {
        if (contact == null) {
            throw new ContactException("Contact information is missing");
        }

        if (contact.getHouseFlatNo() == null || contact.getHouseFlatNo().isEmpty()) {
            throw new ContactException("House/Flat number is required");
        }
        
        // Add more validation checks as needed
        
        return contactRepository.save(contact);
    }

    @Override
    public List<Contact> getAllContacts() {
        try {
            return contactRepository.findAll();
        } catch (Exception ex) {
            throw new ContactException("Failed to retrieve contacts");
        }
    }
}

