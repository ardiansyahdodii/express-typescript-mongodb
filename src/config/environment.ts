import 'dotenv/config'

export const CONFIG = {
    mongodb_url: process.env.MONGODB_URL,
    public_key: process.env.PUBLIC_KEY,
    private_key: process.env.PRIVATE_KEY,
    jwt_secret: process.env.JWT_SECRET,
    jwt_public: `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkRBfQ80Cy1j5zqYKBLq+
    4vPJmVo9GpsTcB51QVivmAbbbnchvDdK/LdNrMLjxP7SYRbvpE2EQY0m1g588LgT
    p628wfzRlrpFUMUQo2Hxwbz5tC3TSkB+DsdGp3euZzAlKKu+62l8RerxrSSZZvSC
    YOCIgE5PGu1txcnsqrfwIdr/Z4CZuXaFKb6+75IxyhhVwamwgInOlTxxr8fllWV/
    PIlip1vCGWBb8uHJO1MWcmyg9eLITqL98VE39Ajq5ZpMA0MfR6eVyr1HJwKWjUsE
    QmFkACC1pd93hLA2jEHuRGJTZvyBs0LxlKiZsuUx6dBltoT8sd9eOHSUGzbZUDfr
    sQIDAQAB
    -----END PUBLIC KEY-----`,
    jwt_private: `-----BEGIN RSA PRIVATE KEY-----
    MIIEpAIBAAKCAQEAkRBfQ80Cy1j5zqYKBLq+4vPJmVo9GpsTcB51QVivmAbbbnch
    vDdK/LdNrMLjxP7SYRbvpE2EQY0m1g588LgTp628wfzRlrpFUMUQo2Hxwbz5tC3T
    SkB+DsdGp3euZzAlKKu+62l8RerxrSSZZvSCYOCIgE5PGu1txcnsqrfwIdr/Z4CZ
    uXaFKb6+75IxyhhVwamwgInOlTxxr8fllWV/PIlip1vCGWBb8uHJO1MWcmyg9eLI
    TqL98VE39Ajq5ZpMA0MfR6eVyr1HJwKWjUsEQmFkACC1pd93hLA2jEHuRGJTZvyB
    s0LxlKiZsuUx6dBltoT8sd9eOHSUGzbZUDfrsQIDAQABAoIBAEKbjeKH49yTAkEM
    pFT/ml6DKfIsKRpqUkaM9bIHkrjvjRnvwaG2kcvwLs5AvmzZxKen7Gk43p1qvoZT
    KLMvEndPovg/qczXwrQPiFA8zND0gINm9zmE21zVy29h2MawqJ9AHO3jBZjlBAtI
    XteTNbpd3s9rJY9rrZe/29eXlb81KWjgcwBpm+sb4TUEQMmGBzyyezmAb0vBYfrT
    vaZbIqFZu7nqqD64yuKbDvjc1rgqQa2Ky7bvDue0eOTqgBTs4znZKAqKuRll2sm8
    VqronpQMCd7K8dfa1E8bIrpHtyLF6dam1XrkMdEdgswbb1NJNRFI83M6GTXmodb3
    K5L9+XECgYEA1TLcsY7but0RiA1cahCqcNqzX9h0BQhsc5fcQ4Kh9hQIXUYgRbUH
    wLcfVeQRlT5PXaVjzD3d9UXfAhjp6SpIrByjEzBBqDF1otyCfV5DEhZX+zGvWqVw
    w8u22fvYADQz22FNuzsYn/gsU5fgnO75Y2dZ5EBF9uPR0FIg7CNBx0sCgYEAri/K
    1ks7teBDE0gdTEk+7X0D7WTqMHxwUoR+BY5iaJ9UgH/n/pM6rmWZQxai7ueKcj36
    8QaA27GlC2j1hFb+QJiyEQc1+/3yS6Yl2Z+9t1SLAmxUj8G+zgtloE3Dpv1SDtV1
    OyySnJDjJOncbr391USIvKqEO+An7CFZJWg6D3MCgYEAtXfIf93QS9q1fG+a9LDg
    0pRkz7Um8826uh1Nn60GfLWKdRImkA7J3ZBBPNOW38ict2H6czNJxObHLjrUhuG1
    38G0ULXnfOk0bv5wl5NvVWrtUmN1FZvyQsYYCq0hqvLEHPxStIZVrHwKBtEkn4+N
    eL3UtsK6iq5ZvY7adQSBjccCgYBqlagCdMq2weGJXOlAktlErOjITKXYwWxhsd0D
    PVsONeCZOKsW5bRUnqqnmKRel6Ppv+9bqOUUiaE6WCFTt3+gu07KiKUJ6xxmGeaz
    QcHu+naNJwifZqiAoAyxiKQd/IhHt2oiqWWVFDtJjShrQyqdY3BgMd70XHdRUB6i
    eyJ77QKBgQDSMrMca61gT45obJuzhWm73iXSd9Lc63QtAR84XpsFRVLzkFS58ZN2
    28M+Mq3/xkagnnN/EiThapjAVyb3hS/jtb6kRUXS9XKhMu79CrhGlv43FoZQxWPw
    IrYZUrBKqII2DvI7BM9m1dmevUAfoN5tyCzp6eqKaHGg6KadoVfttw==
    -----END RSA PRIVATE KEY-----`
}