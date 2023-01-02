---
layout: page
title: bestellen
---
<!-- Order Section -->
<section id="order">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 text-center">
                <h2>Bestellen</h2>
                <hr class="star-primary">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-8 col-lg-offset-2">
                <p class="text-center"><strong>
                    De crème is in de volgende hoeveelheden verkrijgbaar:
                </strong></p>
                <table class="table table-striped">
                    <!--
                    <thead>
                        <tr>
                            <th>Verpakking</th>
                            <th>Volume</th>
                            <th>Prijs</th>
                        </tr>
                    </thead>
                    -->
                    <tbody>
                        <tr typeof="schema:Product">
                            <td class="packaging">
                                <span rel="schema:brand" typeof="schema:Brand" property="schema:name" content="Tover Crème"></span>
                                <span property="schema:name">Klein Glazen Potje Crème</span>
                                <span property="schema:sku" content="Cre/Po-45SmGl"></span>
                                <span property="schema:mpn" content="Cre/Po-45SmGl"></span>
                            </td>
                            <td class="volume">(45ml)</td>
                            <td class="price" rel="schema:offers" typeof="schema:Offer">
                                <span property="schema:priceCurrency" content="EUR">€</span>
                                <span property="schema:price" content="6.50">6,50</span>
                                per stuk
                                <span property="schema:availability" content="https://schema.org/InStock"></span>
                            </td>
                        </tr>
                        <tr typeof="schema:Product">
                            <td class="packaging">
                                <span rel="schema:brand" typeof="schema:Brand" property="schema:name" content="Tover Crème"></span>
                                <span property="schema:name">Glazen Potje Crème</span>
                                <span property="schema:sku" content="Cre/Po-100MeGl"></span>
                                <span property="schema:mpn" content="Cre/Po-100MeGl"></span>
                            </td>
                            <td class="volume">(100ml)</td>
                            <td class="price" rel="schema:offers" typeof="schema:Offer">
                                <span property="schema:priceCurrency" content="EUR">€</span>
                                <span property="schema:price" content="12.50">12,50</span>
                                per stuk
                                <span property="schema:availability" content="https://schema.org/InStock"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p class="text-center"><strong>
                    Bestellen kan door een email te zenden aan
                    {% include email.lqd email="tover.creme@gmail.com" %}
                    </strong>
                </p>
                <p>
                    Nadat de bestelling is geplaats wordt er een email verzonden
                    waarin staat wat het verschuldigde bedrag is en hoe te betalen.
                    Het kan voorkomen dat de crème niet per direct leverbaar is.
                    Mocht je moeten wachten tot er een nieuwe batch gemaakt wordt,
                    dan staat dit ook in de email.
                </p>
                <p class="text-center"><strong>
                    De crème kan in <a href="https://www.google.com/maps/place/Oldenzaal/">Oldenzaal</a> in persoon overhandigd of per post verstuurd worden.
                </strong></p>
                <p>
                    Indien de bestelling in persoon wordt afgenomen kan er ter plekke betaald worden.
                </p>
                <p>
                    Indien de bestelling per post verstuurd dient te worden, graag het adres in de email vermelden.
                    Betaling dient te geschieden voordat verzending plaatsvind.
                </p>
                <p>
                    Indien gewenst kan er ook via een <a href="https://www.tikkie.me/">Tikkie</a> betaald worden.
                </p>
                <p><small><small>
                    Verzendkosten zijn €8,65
                    (Standaard Pakket kosten inclusief Track & Trace €7,65
                    volgens
                    <a href="https://www.postnl.nl/tarieven/Pakket/NL/351g-2kg">
                        de tarieven van PostNL
                    </a>
                    plus €1,- voor het verpakkingsmateriaal)
                </small></small></p>
                <p>Bestellingen vanaf €50,- worden gratis verzonden.</p>
            </div>
        </div>
    </div>
</section>
