        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navbar = document.querySelector('.navbar');

        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navbar.classList.toggle('active');
        });

        const navLinks = document.querySelectorAll('.navbar a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuToggle.classList.remove('active');
                navbar.classList.remove('active');
            });
        });

        // Filter functionality
        const filterBtns = document.querySelectorAll('.filter-btn');
        const modelCards = document.querySelectorAll('.model-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;

                modelCards.forEach(card => {
                    const category = card.dataset.category;
                    
                    if (filter === 'all' || category.includes(filter)) {
                        card.style.display = 'block';
                        card.style.animation = 'cardFadeIn 0.6s ease forwards';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Modal data
        const modelsData = {
            gt: {
                title: 'Mustang GT 2024',
                image:'/assets/images/Mustang_GT1.avif',
                description: 'The Ford Mustang GT continues the legendary tradition with its naturally aspirated 5.0L V8 engine. This modern classic delivers an exhilarating driving experience with 450 horsepower, advanced handling dynamics, and cutting-edge technology. Perfect balance of raw power and everyday drivability.',
                specs: [
                    { icon: 'bxs-tachometer', label: 'Horsepower', value: '450 HP' },
                    { icon: 'bxs-zap', label: '0-60 mph', value: '4.3 seconds' },
                    { icon: 'bxs-droplet', label: 'Engine', value: '5.0L V8' },
                    { icon: 'bxs-dashboard', label: 'Top Speed', value: '155 mph' },
                    { icon: 'bxs-car', label: 'Transmission', value: '6-Speed Manual' },
                    { icon: 'bxs-gas-pump', label: 'Fuel Economy', value: '18/24 MPG' }
                ]
            },
            ecoboost: {
                title: 'Mustang EcoBoost 2024',
                image: '/assets/images/Mustang_EcoBoost.avif',
                description: 'The EcoBoost Mustang proves you don\'t need a V8 to have fun. With a turbocharged 2.3L four-cylinder engine producing 310 horsepower, it offers impressive performance with better fuel efficiency. Ideal for daily driving while maintaining that unmistakable Mustang character.',
                specs: [
                    { icon: 'bxs-tachometer', label: 'Horsepower', value: '310 HP' },
                    { icon: 'bxs-zap', label: '0-60 mph', value: '5.1 seconds' },
                    { icon: 'bxs-droplet', label: 'Engine', value: '2.3L Turbo I-4' },
                    { icon: 'bxs-dashboard', label: 'Top Speed', value: '145 mph' },
                    { icon: 'bxs-car', label: 'Transmission', value: '10-Speed Auto' },
                    { icon: 'bxs-gas-pump', label: 'Fuel Economy', value: '21/30 MPG' }
                ]
            },
            gt500: {
                title: 'Shelby GT500 2024',
                image: '/assets/images/Shelby_GT.webp',
                description: 'The ultimate Mustang. The Shelby GT500 is a supercar in muscle car clothing. With a hand-built supercharged 5.2L V8 producing 760 horsepower, carbon fiber components, and track-focused aerodynamics, this is the pinnacle of American performance engineering.',
                specs: [
                    { icon: 'bxs-tachometer', label: 'Horsepower', value: '760 HP' },
                    { icon: 'bxs-zap', label: '0-60 mph', value: '3.3 seconds' },
                    { icon: 'bxs-droplet', label: 'Engine', value: '5.2L SC V8' },
                    { icon: 'bxs-dashboard', label: 'Top Speed', value: '180 mph' },
                    { icon: 'bxs-car', label: 'Transmission', value: '7-Speed DCT' },
                    { icon: 'bxs-gas-pump', label: 'Fuel Economy', value: '12/18 MPG' }
                ]
            },
            mach1: {
                title: 'Mustang Mach 1 2024',
                image: '/assets/images/Mustang_Mach1.jpg',
                description: 'The Mach 1 nameplate returns with a vengeance. Combining the best handling components from GT350, GT500, and Bullitt models, the Mach 1 offers track-ready performance with iconic heritage styling. A true driver\'s car for enthusiasts.',
                specs: [
                    { icon: 'bxs-tachometer', label: 'Horsepower', value: '480 HP' },
                    { icon: 'bxs-zap', label: '0-60 mph', value: '4.2 seconds' },
                    { icon: 'bxs-droplet', label: 'Engine', value: '5.0L V8' },
                    { icon: 'bxs-dashboard', label: 'Top Speed', value: '163 mph' },
                    { icon: 'bxs-car', label: 'Transmission', value: '6-Speed Manual' },
                    { icon: 'bxs-gas-pump', label: 'Fuel Economy', value: '16/25 MPG' }
                ]
            },
            classic: {
                title: 'Mustang Fastback 1967',
                image: '/assets/images/Mustang_Fast.webp',
                description: 'The 1967 Mustang Fastback is automotive royalty. This is the car that made the Mustang a legend. With its aggressive fastback design, powerful V8 engine, and timeless styling, it remains one of the most sought-after classic cars in the world.',
                specs: [
                    { icon: 'bxs-tachometer', label: 'Horsepower', value: '320 HP' },
                    { icon: 'bxs-zap', label: '0-60 mph', value: '6.5 seconds' },
                    { icon: 'bxs-droplet', label: 'Engine', value: '7.0L V8' },
                    { icon: 'bxs-dashboard', label: 'Top Speed', value: '130 mph' },
                    { icon: 'bxs-car', label: 'Transmission', value: '4-Speed Manual' },
                    { icon: 'bxs-star', label: 'Status', value: 'Collector\'s Item' }
                ]
            },
            darkhorse: {
                title: 'Mustang Dark Horse 2024',
                image: '/assets/images/Mustang_DarkHorse1.webp',
                description: 'The Dark Horse is Ford\'s answer to track-focused competitors. With enhanced cooling, suspension upgrades, Brembo brakes, and an aggressive aesthetic, this beast delivers 500 horsepower of track-ready fury. Born to dominate both street and circuit.',
                specs: [
                    { icon: 'bxs-tachometer', label: 'Horsepower', value: '500 HP' },
                    { icon: 'bxs-zap', label: '0-60 mph', value: '3.9 seconds' },
                    { icon: 'bxs-droplet', label: 'Engine', value: '5.0L V8' },
                    { icon: 'bxs-dashboard', label: 'Top Speed', value: '165 mph' },
                    { icon: 'bxs-car', label: 'Transmission', value: '6-Speed Manual' },
                    { icon: 'bxs-gas-pump', label: 'Fuel Economy', value: '15/23 MPG' }
                ]
            }
        };

        // Modal functions
        function openModal(modelId) {
            const modal = document.getElementById('modal');
            const data = modelsData[modelId];
            
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalDescription').textContent = data.description;
            
            const specsContainer = document.getElementById('modalSpecs');
            specsContainer.innerHTML = '';
            
            data.specs.forEach(spec => {
                const specItem = document.createElement('div');
                specItem.className = 'modal-spec-item';
                specItem.innerHTML = `
                    <i class='bx ${spec.icon}'></i>
                    <div class="modal-spec-label">${spec.label}</div>
                    <div class="modal-spec-value">${spec.value}</div>
                `;
                specsContainer.appendChild(specItem);
            });
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('modal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        // Close modal on outside click
        document.getElementById('modal').addEventListener('click', (e) => {
            if (e.target.id === 'modal') {
                closeModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                closeModal();
            }
        });
