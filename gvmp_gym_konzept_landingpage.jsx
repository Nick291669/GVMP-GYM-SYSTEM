export default function GvmpGymKonzeptLandingpage() {
  const memberships = [
    {
      name: 'Basic',
      price: 'Einsteiger',
      perks: [
        'Normales Training mit Zugang zum gesamten Standardsystem',
        'Kleiner Rabatt auf Protein-Shakes und Riegel',
        'Ideal für Spieler, die entspannt und regelmäßig trainieren wollen',
      ],
    },
    {
      name: 'Pro',
      price: 'Fortgeschritten',
      perks: [
        'Schnellerer Fortschritt bei Methode 3 (Minigame-Training)',
        'Größerer Rabatt auf Protein-Produkte',
        'Perfekt für aktive Spieler mit Fokus auf Effizienz',
      ],
    },
    {
      name: 'Ultimate',
      price: 'Premium',
      perks: [
        'Schnellerer Fortschritt bei allen Trainingsmethoden',
        'Maximaler Rabatt im Gym-Shop',
        'Beste Wahl für Spieler, die das System vollständig nutzen wollen',
      ],
    },
  ];

  const methods = [
    {
      title: 'Methode 1',
      subtitle: 'Klassisch & entspannt',
      text: 'Wie das aktuelle Training: Taste drücken, Satz abschließen, nebenbei RP machen oder entspannt trainieren.',
    },
    {
      title: 'Methode 2',
      subtitle: 'Länger trainieren, mehr erreichen',
      text: 'Ein Satz dauert länger, dafür kann man pro Serverwende deutlich mehr Ausdauer und Trainingsfortschritt erreichen.',
    },
    {
      title: 'Methode 3',
      subtitle: 'Interaktiv mit Minigames',
      text: 'Aktives Training mit Gewichtsauswahl, Skill-Komponente und Belohnung durch Protein-Punkte sowie schnelleren Fortschritt.',
    },
  ];

  const highlights = [
    'Neues Gym/MLO im cleanen Franchise-Stil',
    '3 verschiedene Trainingsarten für unterschiedliche Spielertypen',
    'Protein-Shakes, Riegel und Trainingsbooster',
    'VIP-Trainingsbereich mit festen Öffnungszeiten',
    'Daily- und Weekly-Challenges für mehr Aktivität',
    'Wettbewerbe wie MR Olympia mit Startgebühr und Preisgeld',
    'Recovery-System mit Sauna, Eisbad und Massage',
    'Verletzungsrisiko bei zu schwerem Training für mehr Tiefe',
  ];

  const events = [
    {
      title: 'Daily Challenges',
      desc: 'Zum Beispiel 30 Wiederholungen, 3 Geräte benutzen oder Minigames fehlerfrei abschließen.',
    },
    {
      title: 'Weekly Challenges',
      desc: 'Größere Ziele mit besseren Belohnungen wie seltener Gym-Kleidung oder vielen Protein-Punkten.',
    },
    {
      title: 'MR Olympia / Wettbewerbe',
      desc: 'Vom Besitzer organisierte Events mit Anmeldegebühr, Zuschauern, Preisgeld und Prestige.',
    },
    {
      title: 'VIP Training Slots',
      desc: 'Exklusive Zeitfenster für besseren Fortschritt und mehr Aktivität auch außerhalb der Prime Time.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(214,158,46,0.15),transparent_30%)] pointer-events-none" />

      <header className="relative border-b border-amber-600/20 bg-neutral-950/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-amber-500">GVMP Konzept</p>
            <h1 className="mt-2 text-2xl md:text-4xl font-semibold tracking-tight">Gym-System Rework</h1>
          </div>
          <div className="rounded-2xl border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm text-amber-200">
            Mehr RP • Mehr Aktivität • Mehr Wirtschaft
          </div>
        </div>
      </header>

      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 py-20 grid gap-10 lg:grid-cols-[1.25fr_0.75fr] items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1 text-sm text-amber-200">
              Konzeptvorschlag für ein lebendigeres Training auf GVMP
            </p>
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              Ein Gym, das nicht nur <span className="text-amber-400">trainieren</span>, sondern auch <span className="text-amber-400">RP spielen</span> interessant macht.
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-neutral-300 leading-8">
              Ziel des Konzepts ist ein modernes, interaktives Gym-System mit mehreren Trainingswegen, Mitgliedschaften,
              Events, VIP-Bereich, Shop, Recovery-Optionen und wirtschaftlichen Möglichkeiten für einen aktiven Besitzer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm">3 Trainingsmethoden</span>
              <span className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm">Mitgliedschaften</span>
              <span className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm">VIP-Zeiten</span>
              <span className="rounded-xl border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm">Challenges & Events</span>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-500/20 bg-neutral-900/80 p-6 shadow-2xl shadow-black/30">
            <div className="grid gap-4">
              {highlights.map((item) => (
                <div key={item} className="rounded-2xl border border-neutral-800 bg-neutral-950/80 p-4 text-sm text-neutral-200">
                  <span className="text-amber-400 mr-2">◆</span>{item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="mb-8 flex items-end justify-between gap-4 flex-wrap">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Trainingssystem</p>
              <h3 className="mt-2 text-3xl font-semibold">Drei Wege zu trainieren</h3>
            </div>
            <p className="max-w-2xl text-neutral-400">
              Das System deckt entspannte, zeitintensive und aktive Spielstile ab, damit jeder Spieler die passende Methode wählen kann.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {methods.map((method) => (
              <div key={method.title} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6 hover:border-amber-500/40 transition-colors">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-500">{method.title}</p>
                <h4 className="mt-3 text-2xl font-medium">{method.subtitle}</h4>
                <p className="mt-4 text-neutral-300 leading-7">{method.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Mitgliedschaften</p>
            <h3 className="mt-2 text-3xl font-semibold">Modelle mit klaren Vorteilen</h3>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {memberships.map((membership, index) => (
              <div
                key={membership.name}
                className={`rounded-3xl p-6 border ${index === 2 ? 'border-amber-500/40 bg-gradient-to-b from-amber-500/10 to-neutral-900' : 'border-neutral-800 bg-neutral-900'}`}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-2xl font-semibold">{membership.name}</h4>
                  <span className="rounded-full border border-neutral-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-neutral-300">{membership.price}</span>
                </div>
                <div className="mt-6 space-y-3">
                  {membership.perks.map((perk) => (
                    <div key={perk} className="rounded-2xl bg-neutral-950/60 p-4 text-neutral-200">
                      <span className="text-amber-400 mr-2">✓</span>{perk}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">VIP Bereich</p>
            <h3 className="mt-2 text-3xl font-semibold">Gezielte Aktivität außerhalb der Prime Time</h3>
            <p className="mt-4 text-neutral-300 leading-8">
              Ein privater Trainingsbereich mit festen Zeitfenstern wie 09–10 Uhr, 14–15 Uhr, 16–18 Uhr und 21–22 Uhr.
              Dort erhalten alle Spieler denselben starken Trainingsbonus, unabhängig von ihrer Mitgliedschaft. Der Eintritt
              wird stundenweise bezahlt und kann vom Besitzer flexibel zwischen etwa 20.000$ und 50.000$ angepasst werden.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl bg-neutral-950 p-4 border border-neutral-800">24/7 Standardbereich bleibt erhalten</div>
              <div className="rounded-2xl bg-neutral-950 p-4 border border-neutral-800">VIP als zusätzliche Premium-Option</div>
              <div className="rounded-2xl bg-neutral-950 p-4 border border-neutral-800">Mehr Einnahmen für Besitzer</div>
              <div className="rounded-2xl bg-neutral-950 p-4 border border-neutral-800">Mehr sozialer Treffpunkt</div>
            </div>
          </div>

          <div className="rounded-3xl border border-neutral-800 bg-neutral-900 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Shop & Recovery</p>
            <h3 className="mt-2 text-3xl font-semibold">Mehr Tiefe für Wirtschaft und Progression</h3>
            <div className="mt-6 space-y-4 text-neutral-300 leading-7">
              <p><span className="text-amber-400 font-medium">Protein-Punkte:</span> Nur durch Methode 3 verdienbar und einlösbar für Riegel und Shakes.</p>
              <p><span className="text-amber-400 font-medium">Booster:</span> Energy Drinks, Creatin und weitere Produkte gegen Ingame-Geld, hergestellt durch den Besitzer aus Materialien.</p>
              <p><span className="text-amber-400 font-medium">Recovery:</span> Sauna, Eisbad, Massage oder Physio, um schneller erneut trainieren zu können oder Ausdauer länger zu halten.</p>
              <p><span className="text-amber-400 font-medium">Risiko:</span> Verletzungen bei zu schwerem und wiederholt fehlgeschlagenem Training sorgen für mehr Realismus und Balance.</p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">Events & Wettbewerb</p>
            <h3 className="mt-2 text-3xl font-semibold">Gründe, regelmäßig ins Gym zu kommen</h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {events.map((event) => (
              <div key={event.title} className="rounded-3xl border border-neutral-800 bg-neutral-900 p-6">
                <h4 className="text-xl font-semibold">{event.title}</h4>
                <p className="mt-4 text-neutral-300 leading-7">{event.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] border border-amber-500/20 bg-gradient-to-br from-neutral-900 to-neutral-950 p-10 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-amber-500">Statement</p>
            <h3 className="mt-3 text-3xl md:text-5xl font-semibold">Dieses Konzept soll zeigen, dass mir GVMP und langfristige Serverqualität wichtig sind.</h3>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-neutral-300 leading-8">
              Die Idee verbindet Gameplay, RP, Wirtschaft und Community. Das Gym wird dadurch nicht mehr nur ein Ort zum stumpfen Hochtrainieren,
              sondern ein lebendiger Treffpunkt mit Systemtiefe, aktiver Beteiligung und echtem Mehrwert für Spieler und Betreiber.
            </p>
            <div className="mt-8 inline-flex rounded-2xl border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-amber-200">
              Vorschlag für ein moderneres, aktiveres und wirtschaftlich stärkeres Gym-System auf GVMP
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
