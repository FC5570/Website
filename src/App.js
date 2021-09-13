function App() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2">
			<div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<img
					className="h-full py-2 pr-10 ml-8"
					draggable={false}
					src="https://i.imgur.com/xY9WWdI.png"
					height="200"
					width="200"
					alt="logo"
				/>
				<span className="font-mono text-blue-300 text-3xl">
					Hi 👋
					<br /> I'm FC, I work as a front-end and a back-end developer.
				</span>
			</div>

			<footer className="text-blue-300 bg-black body-font">
				<div className="container px-5 py-8 pt-12 mx-auto flex items-center sm:flex-row flex-col">
					<span className="inline-flex sm:mt-0 mt-4 px-5 justify-center sm:justify-start">
						<a
							href="https://github.com/FC5570"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								role="img"
								viewBox="0 0 24 24"
								fill="white"
								className="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
							</svg>
						</a>

						<a
							className="ml-3"
							href="https://npmjs.com/~fc5570"
							target="_blank"
							rel="noreferrer"
						>
							<svg
								role="img"
								viewBox="0 0 256 256"
								className="w-5 h-5"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path fill="#C12127" d="M0 256V0h256v256z" />
								<path fill="#FFF" d="M48 48h160v160h-32V80h-48v128H48z" />
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</div>
	);
}

export default App;
