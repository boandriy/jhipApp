package com.aba.web.rest.errors;

/**
 * Created by petroborovets on 7/22/18.
 */
public class FileStorageException extends RuntimeException {
    public FileStorageException(String message) {
        super(message);
    }

    public FileStorageException(String message, Throwable cause) {
        super(message, cause);
    }
}
