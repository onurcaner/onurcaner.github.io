# Services Style Guide

## Example: Data Retrieval Model

This example outlines how a model retrieves and prepares data for use in the app.

1. Somewhere in the app, a new instance of AbcDataGetAllModel is created.
2. The model uses AbcRepositoryGetAllQuery to retrieve data from the server.
3. The model uses AbcServerDataValidator to validate the server-side response.
4. The model uses AbcServerToClientDataTransformer to convert server data to client-friendly format. This includes:
   - Converting ISO strings to objects
   - Renaming keys from snake_case to camelCase
5. The model uses AbcClientDataValidator to validate the transformed client-side data.

The validated client data is now ready for consumption by the app.

## Individual Components

### 1. Repository Queries and Mutations

- Responsible for direct interaction with external data sources (e.g., APIs, databases).
- Example: AbcRepositoryGetAllQuery

### 2. Data Validators

- Ensure data integrity and schema compliance.
- Split into:
- - ServerDataValidator: Validates raw server responses.
- - ClientDataValidator: Validates transformed client-side data.

### 3. Data Transformers

- Convert data between server and client formats.
- Handle serialization/deserialization, naming conventions, and type conversions.
- Example: AbcServerToClientDataTransformer

## Compound Components

### 1. Models

- Orchestrate the entire data flow: fetching, validating, transforming.
- Serve as the primary interface for the rest of the app.
- Example: AbcDataGetAllModel
