<div class="mt-4">
	<div class="max-w-sm p-2 mx-auto space-y-4">
		<img class="w-1/2 mx-auto" src="/pp.png" alt="App logo" />

		<div>
			<label
				for="time"
				class="block text-sm font-medium leading-6 text-gray-900">Time</label
			>
			<select
				id="time"
				name="time"
				class="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6"
			>
				<option>09:00 AM</option>
				<option>10:00 AM</option>
				<option>11:00 AM</option>
			</select>
		</div>

		<div>
			<label
				for="action"
				class="block text-sm font-medium leading-6 text-gray-900">Action</label
			>
			<select
				id="action"
				name="action"
				class="mt-2 block w-full rounded-md border-0 py-2 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6"
			>
				<option>Worked</option>
				<option>Wasted</option>
			</select>
		</div>

		<div>
			<label
				for="description"
				class="block text-sm font-medium leading-6 text-gray-900"
				>description</label
			>
			<div class="mt-2">
				<textarea
					rows="4"
					name="description"
					id="description"
					class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:py-1.5 sm:text-sm sm:leading-6"
				></textarea>
			</div>
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
				>Record</button
			>
		</div>

		<div class="mt-8 flow-root">
			<div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
				<div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
					<div
						class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg"
					>
						<table class="min-w-full divide-y divide-gray-300">
							<thead class="bg-gray-50">
								<tr>
									<th
										scope="col"
										class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
										>Time</th
									>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>Action</th
									>
									<th
										scope="col"
										class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
										>Description</th
									>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200 bg-white">
								<tr>
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
										>09:00 AM</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										<span
											class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800"
											>Wasted</span
										>
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>Watched youtube</td
									>
								</tr>
								<tr>
									<td
										class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6"
										>10:00 AM</td
									>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
										<span
											class="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800"
											>Worked</span
										>
									</td>
									<td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"
										>Configured monorepo</td
									>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

		<div class="mx-auto grid grid-cols-2 gap-4">
			<div>
				<label
					for="start-time"
					class="block mb-2 text-sm font-medium text-gray-900"
					>Start time:</label
				>
				<div class="relative">
					<div
						class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
					>
						<svg
							class="w-4 h-4 text-gray-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<input
						type="time"
						id="start-time"
						class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
						min="09:00"
						max="18:00"
						value="00:00"
						required
					/>
				</div>
			</div>
			<div>
				<label
					for="end-time"
					class="block mb-2 text-sm font-medium text-gray-900">End time:</label
				>
				<div class="relative">
					<div
						class="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none"
					>
						<svg
							class="w-4 h-4 text-gray-300"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								fill-rule="evenodd"
								d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
								clip-rule="evenodd"
							/>
						</svg>
					</div>
					<input
						type="time"
						id="end-time"
						class="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full p-2.5"
						min="09:00"
						max="18:00"
						value="00:00"
						required
					/>
				</div>
			</div>
		</div>

		<div>
			<button
				type="submit"
				class="flex w-full justify-center rounded-md bg-gray-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
				>Create</button
			>
		</div>
	</div>
</div>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.gray.100);
	}
</style>
