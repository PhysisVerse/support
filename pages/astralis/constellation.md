# ASTRALIS Constellation

The primary network that helps to power the Physis ecosystem and OpenAPI.


```mermaid
graph TD;
subgraph AA [SmartSpots]
A[Mobile app];
B[Web app];
C[Node.js client];
end
subgraph BB [Services]
E[REST API];
F[GraphQL API];
G[SOAP API];
end
Z[PHYOpen API];
A --> Z;
B --> Z;
C --> Z;
Z --> E;
Z --> F;
Z --> G;
```

All equations to go here: **: $a=\sqrt{b^2 + c^2}$.
